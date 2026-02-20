import { useTranslation } from "react-i18next";
import InvestorImg from "../assets/hero1.png";
const InvestorNewsSection = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[600px] overflow-hidden">

        {/* Background */}
        <img
          src={InvestorImg}
          alt="Mining Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 h-full flex items-center">

          {/* Maroon Panel */}
          <div className="bg-[#4A0404]/90 backdrop-blur-sm text-white p-12 max-w-3xl ml-16 shadow-2xl">

            {/* Gold Accent Line */}
            <div className="w-12 h-1 bg-yellow-400 mb-4"></div>

            <p className="uppercase text-xs tracking-widest text-yellow-400 mb-2">
              {t("irLabel")}
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {t("irMainTitle")}
            </h2>

            <div className="space-y-4 text-sm">
              <div className="border-b border-yellow-400 pb-2 hover:text-yellow-400 transition">
                {t("irNews1")}
              </div>
              <div className="border-b border-yellow-400 pb-2 hover:text-yellow-400 transition">
                {t("irNews2")}
              </div>
              <div className="border-b border-yellow-400 pb-2 hover:text-yellow-400 transition">
                {t("irNews3")}
              </div>
              <div className="border-b border-yellow-400 pb-2 hover:text-yellow-400 transition">
                {t("irNews4")}
              </div>
            </div>

            <button className="mt-6 bg-yellow-400 text-[#4A0404] px-6 py-2 text-sm font-semibold hover:bg-yellow-300 transition">
              {t("investorButton")}
            </button>

          </div>
        </div>
      </section>

      {/* ================= DETAIL SECTION ================= */}
      <section className="bg-[#4A0404] text-white py-20 px-10">
        <div className="max-w-[1400px] mx-auto">

          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <h2 className="text-3xl font-bold mb-8 text-white">
            {t("irDetailTitle")}
          </h2>

          <p className="text-white/80 max-w-4xl leading-relaxed">
            {t("irDetailText")}
          </p>

          <p className="text-sm text-yellow-400 mt-8">
            {t("irDate")}
          </p>

        </div>
      </section>
    </>
  );
};

export default InvestorNewsSection;