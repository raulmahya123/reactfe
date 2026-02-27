import { useTranslation } from "react-i18next";

const VisionMission = () => {
  const { t } = useTranslation();

  return (
    <section
      id="vision"
      className="py-20 bg-white scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("visionMission")}
          </h2>

          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>
        </div>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* ===== VISION CARD ===== */}
          <div className="bg-[#F8F9F4] rounded-lg p-10 border border-gray-100 hover:shadow-md transition duration-300">
            
            <h3 className="text-2xl font-semibold text-[#2F3E34] mb-6">
              {t("vision")}
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              {t("visionText")}
            </p>

            <div className="w-12 h-[2px] bg-[#C6A75E] mt-8"></div>
          </div>

          {/* ===== MISSION CARD ===== */}
          <div className="bg-[#F8F9F4] rounded-lg p-10 border border-gray-100 hover:shadow-md transition duration-300">
            
            <h3 className="text-2xl font-semibold text-[#2F3E34] mb-6">
              {t("mission")}
            </h3>

            <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-[#C6A75E] font-bold mt-1">•</span>
                <span>{t("mission1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C6A75E] font-bold mt-1">•</span>
                <span>{t("mission2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C6A75E] font-bold mt-1">•</span>
                <span>{t("mission3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C6A75E] font-bold mt-1">•</span>
                <span>{t("mission4")}</span>
              </li>
            </ul>

            <div className="w-12 h-[2px] bg-[#C6A75E] mt-8"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;