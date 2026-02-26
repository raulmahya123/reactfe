import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import AndalanLogo from "../assets/logo-andalan.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer className="bg-[#BEC5A4] text-black pt-28 pb-16 relative">
        <div className="max-w-[1400px] mx-auto px-8">

          {/* MAIN GRID */}
          <div className="grid md:grid-cols-3 gap-16 items-start">

            {/* LEFT – LOGO & ADDRESS */}
            <div>
              <div className="mb-6">
                <img
                  src={AndalanLogo}
                  alt="PT Andalan Artha Primanusa Tbk"
                  className="h-20 w-auto object-contain"
                />
              </div>

              <p className="text-sm text-black/80 leading-relaxed">
                {t("footer.addressLine1")} <br />
                {t("footer.addressLine2")} <br />
                {t("footer.addressCountry")}
              </p>
            </div>

            {/* MIDDLE – MENU */}
            <div className="space-y-4 text-sm">
              <Link to="/about" className="block hover:text-[#C6A75E] transition">
                {t("footer.about")}
              </Link>
              <Link to="/proyek" className="block hover:text-[#C6A75E] transition">
                {t("footer.project")}
              </Link>
              <Link to="/investor" className="block hover:text-[#C6A75E] transition">
                {t("footer.investor")}
              </Link>
              <Link to="/governance" className="block hover:text-[#C6A75E] transition">
                {t("footer.governance")}
              </Link>
              <Link to="/sustainability" className="block hover:text-[#C6A75E] transition">
                {t("footer.sustainability")}
              </Link>
              <Link to="/media" className="block hover:text-[#C6A75E] transition">
                {t("footer.media")}
              </Link>
              <Link to="/contact" className="block hover:text-[#C6A75E] transition">
                {t("footer.contact")}
              </Link>
            </div>

            {/* RIGHT – CONTACT */}
            <div className="text-sm space-y-6">
              <div>
                <p className="font-semibold">{t("footer.phone")}</p>
                <p>(62 21) 2357 9812</p>
              </div>

              <div>
                <p className="font-semibold">{t("footer.fax")}</p>
                <p>(62 21) 2357 9812</p>
              </div>
            </div>

          </div>

          {/* BACK TO TOP */}
          <div className="flex justify-center mt-24">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-12 h-12 rounded-full border border-black/30 flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <FaArrowUp />
            </button>
          </div>

          {/* COPYRIGHT */}
          <div className="text-center mt-12 text-xs text-black/60">
            © {new Date().getFullYear()} PT Andalan Artha Primanusa Tbk.{" "}
            {t("footer.rights")}
          </div>
        </div>
      </footer>

      {/* ================= FRAUD WARNING ================= */}
      <div className="bg-black py-2 overflow-hidden">
        <div
          className="whitespace-nowrap text-xs text-white font-medium"
          style={{
            display: "inline-block",
            paddingLeft: "100%",
            animation: "marquee 25s linear infinite",
          }}
        >
          {t("footer.fraudWarning")}
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