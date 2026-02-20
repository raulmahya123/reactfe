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
      className="py-28 bg-gradient-to-b from-gray-50 to-white scroll-mt-40"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A0404] uppercase tracking-wider">
            {t("milestones")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C6A75E] to-[#D4B76A] mx-auto mt-6"></div>
        </div>

        <div className="relative">

          {/* Center Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#4A0404] h-full"></div>

          <div className="space-y-20">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative md:flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Box */}
                <div className="md:w-1/2 px-6">
                  <div className="bg-white shadow-xl rounded-xl p-8 border-t-4 border-[#C6A75E] hover:shadow-2xl transition duration-500">
                    <h3 className="text-2xl font-bold text-[#4A0404]">
                      {item.year}
                    </h3>
                    <p className="text-gray-700 mt-4 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>

                {/* Circle Node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4A0404] to-[#8B0000] border-4 border-[#C6A75E] flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Spacer */}
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