import { useTranslation } from "react-i18next";
import MiningImg from "../assets/hero1.png";
import TradingImg from "../assets/hero1.png";
import LogisticsImg from "../assets/hero1.png";
import EnergyImg from "../assets/hero1.png";

const BusinessSegments = () => {
  const { t } = useTranslation();

  const segments = [
    {
      title: t("mining"),
      desc: t("miningDesc"),
      image: MiningImg,
    },
    {
      title: t("trading"),
      desc: t("tradingDesc"),
      image: TradingImg,
    },
    {
      title: t("logistics"),
      desc: t("logisticsDesc"),
      image: LogisticsImg,
    },
    {
      title: t("energyDev"),
      desc: t("energyDevDesc"),
      image: EnergyImg,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#4A0404] mb-16">
          {t("businessTitle")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {segments.map((segment, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={segment.image}
                alt={segment.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#4A0404]">
                  {segment.title}
                </h3>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {segment.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default BusinessSegments;
