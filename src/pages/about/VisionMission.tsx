import { useTranslation } from "react-i18next";

const VisionMission = () => {
  const { t } = useTranslation();

  return (
    <section
      id="vision"
      className="py-28 bg-gradient-to-b from-white to-gray-50 scroll-mt-40"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A0404] uppercase tracking-wider">
            {t("visionMission")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C6A75E] to-[#D4B76A] mx-auto mt-6"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* Vision Card */}
          <div className="bg-white rounded-xl shadow-lg p-10 border-t-4 border-[#4A0404] hover:shadow-2xl transition duration-500">
            <h3 className="text-2xl font-semibold text-[#4A0404] mb-6">
              {t("vision")}
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed">
              {t("visionText")}
            </p>

            <div className="w-12 h-[2px] bg-[#C6A75E] mt-8"></div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-xl shadow-lg p-10 border-t-4 border-[#C6A75E] hover:shadow-2xl transition duration-500">
            <h3 className="text-2xl font-semibold text-[#4A0404] mb-6">
              {t("mission")}
            </h3>

            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-[#C6A75E] font-bold">•</span>
                <span>{t("mission1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C6A75E] font-bold">•</span>
                <span>{t("mission2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C6A75E] font-bold">•</span>
                <span>{t("mission3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C6A75E] font-bold">•</span>
                <span>{t("mission4")}</span>
              </li>
            </ul>

            <div className="w-12 h-[2px] bg-[#4A0404] mt-8"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;