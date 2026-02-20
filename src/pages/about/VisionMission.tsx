import { useTranslation } from "react-i18next";

const VisionMission = () => {
  const { t } = useTranslation();

  return (
    <section
      id="vision"
      className="py-24 bg-gray-50 scroll-mt-40"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-[#4A0404] mb-12 uppercase tracking-wide">
          {t("visionMission")}
        </h2>

        {/* Vision */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#8B0000] mb-6">
            {t("vision")}
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            {t("visionText")}
          </p>
        </div>

        {/* Mission */}
        <div>
          <h3 className="text-2xl font-semibold text-[#8B0000] mb-6">
            {t("mission")}
          </h3>
          <ul className="space-y-4 text-gray-700 text-lg list-disc pl-6">
            <li>{t("mission1")}</li>
            <li>{t("mission2")}</li>
            <li>{t("mission3")}</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;