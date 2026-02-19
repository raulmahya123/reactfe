import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#4A0404] text-white pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Address */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              {t("footerAddressTitle")}
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              PT Andalan Artha Primanusa Tbk <br />
              Gedung Andalan Tower Lt. 15 <br />
              Jakarta Selatan 12950 <br />
              Indonesia
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              {t("footerContactTitle")}
            </h3>
            <p className="text-sm text-white/80">
              Tel: +62 21 1234 5678
            </p>
            <p className="text-sm text-white/80 mt-2">
              Email: corporate@andalan.co.id
            </p>
          </div>

          {/* Corporate Secretary */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              {t("footerSecretary")}
            </h3>
            <p className="text-sm text-white/80">
              Corporate Secretary Office
            </p>
            <p className="text-sm text-white/80 mt-2">
              investor@andalan.co.id
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              {t("footerQuickLinks")}
            </h3>

            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#about" className="hover:text-white">Company Profile</a></li>
              <li><a href="#investor" className="hover:text-white">Investor Relations</a></li>
              <li><a href="#governance" className="hover:text-white">Governance</a></li>
              <li><a href="#csr" className="hover:text-white">Sustainability</a></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-16 pt-8 text-center">

          <p className="text-xs text-white/60 max-w-4xl mx-auto">
            {t("footerDisclaimer")}
          </p>

          <p className="text-xs text-white/60 mt-4">
            © {new Date().getFullYear()} PT Andalan Artha Primanusa Tbk. {t("footerRights")}
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
