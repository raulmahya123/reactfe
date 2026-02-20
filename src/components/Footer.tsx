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

        {/* Accent Line */}
        <div className="w-20 h-1 bg-yellow-400 mb-12"></div>

        <div className="grid md:grid-cols-5 gap-12">

          {/* ABOUT */}
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider">
              {t("footerAbout")}
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>{t("footerVision")}</li>
              <li>{t("footerPhilosophy")}</li>
              <li>{t("footerMilestones")}</li>
              <li>{t("footerManagement")}</li>
              <li>{t("footerContactUs")}</li>
            </ul>
          </div>

          {/* INVESTOR */}
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider">
              {t("footerInvestor")}
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>{t("footerFinancial")}</li>
              <li>{t("footerAnnual")}</li>
              <li>{t("footerStock")}</li>
              <li>{t("footerCorporateAction")}</li>
            </ul>
          </div>

          {/* BUSINESS */}
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider">
              {t("footerBusiness")}
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>{t("footerOperation")}</li>
              <li>{t("footerCustomers")}</li>
              <li>{t("footerCoal")}</li>
              <li>{t("footerReserves")}</li>
            </ul>
          </div>

          {/* MEDIA */}
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider">
              {t("footerMedia")}
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>{t("footerAGM")}</li>
              <li>{t("footerAnnouncement")}</li>
              <li>{t("footerPresentation")}</li>
              <li>{t("footerNews")}</li>
            </ul>
          </div>

          {/* CONTACT + SOCIAL */}
          <div className="border-l border-white/20 pl-8">
            <h4 className="font-semibold mb-6 uppercase tracking-wider">
              PT Andalan Artha Primanusa Tbk
            </h4>

            <p className="text-sm text-white/80 leading-relaxed">
              Gedung Andalan Tower Lt. 15 <br />
              Jakarta Selatan 12950 <br />
              Indonesia
            </p>

            <p className="text-sm text-white/80 mt-6">
              Tel: +62 21 1234 5678
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-6 text-lg">
              <a href="#" className="hover:text-yellow-400 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="border-t border-yellow-400 mt-16 pt-8 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} PT Andalan Artha Primanusa Tbk. {t("footerRights")}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;