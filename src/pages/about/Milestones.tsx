import { useTranslation } from "react-i18next";

const Milestones = () => {
  const { t } = useTranslation();

  const timeline = [
    { year: "2005", text: t("milestone1") },
    { year: "2010", text: t("milestone2") },
    { year: "2015", text: t("milestone3") },
    { year: "2020", text: t("milestone4") },
    { year: "2024", text: t("milestone5") },
  ];

  return (
    <section
      id="milestones"
      className="py-24 bg-white scroll-mt-40"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-[#4A0404] mb-16 uppercase tracking-wide">
          {t("milestones")}
        </h2>

        <div className="relative border-l-4 border-[#8B0000] pl-10 space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative">
              
              {/* Bullet */}
              <div className="absolute -left-[18px] top-1 w-5 h-5 bg-[#8B0000] rounded-full"></div>

              <h3 className="text-xl font-semibold text-[#8B0000]">
                {item.year}
              </h3>

              <p className="text-gray-700 mt-2 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Milestones;