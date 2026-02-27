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
      className="py-20 bg-white scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
            {t("milestones")}
          </h2>
          <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] bg-[#C6A75E]/30 h-full"></div>

          <div className="space-y-14">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative md:flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2 px-6">
                  <div className="bg-[#F8F9F4] rounded-lg p-8 border border-gray-100 hover:shadow-md transition duration-300">
                    
                    <h3 className="text-2xl font-bold text-[#2F3E34]">
                      {item.year}
                    </h3>

                    <p className="text-gray-700 mt-4 leading-relaxed text-justify">
                      {item.text}
                    </p>

                  </div>
                </div>

                {/* Circle */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full bg-[#C6A75E] flex items-center justify-center text-white font-semibold shadow-sm">
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