import { useTranslation } from "react-i18next";

const Milestones = () => {
  const { t } = useTranslation();

  const timeline = [
    { year: "2018", text: t("milestone1") },
    { year: "2018", text: t("milestone2") },
    { year: "2024", text: t("milestone3") },
    { year: "2025", text: t("milestone4") },
    { year: "2026", text: t("milestone5") },
  ];

  return (
    <section
      id="milestones"
      className="py-28 bg-white scroll-mt-40"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-wider">
            {t("milestones")}
          </h2>
          <div className="w-24 h-[3px] bg-[#A77B3F] mx-auto mt-6"></div>
        </div>

        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-[#A7B08A] h-full"></div>

          <div className="space-y-20">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative md:flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2 px-6">
                  <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition duration-300">
                    <h3 className="text-2xl font-bold text-black">
                      {item.year}
                    </h3>
                    <p className="text-black mt-4 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>

                {/* Circle Indicator */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-14 h-14 rounded-full bg-[#A7B08A] flex items-center justify-center text-white font-bold shadow-sm">
                    {index + 1}
                  </div>
                </div>

                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Milestones;