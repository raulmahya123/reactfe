import { 
  Trophy, 
  Crosshair, 
  Shield, 
  Gauge,
  Mountain,
  TrendingUp
} from "lucide-react";
import { useTranslation } from "react-i18next";

const KeyHighlights = () => {
  const { t } = useTranslation();

  const values = [
    { key: "excellence", icon: Trophy },
    { key: "focus", icon: Crosshair },
    { key: "fortitude", icon: Shield },
    { key: "optimism", icon: TrendingUp },
    { key: "responsive", icon: Gauge},
    { key: "tenacity", icon: Mountain },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#f4f4f4] relative overflow-hidden">
      
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(122,0,0,0.05),_transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Title */}
        <p className="uppercase tracking-[0.3em] text-xs text-[#7a0000] font-semibold">
          {t("coreValue")}
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A0404] mt-3">
          EFFORT
        </h2>

        <p className="text-gray-500 text-sm sm:text-base max-w-2xl md:max-w-3xl mx-auto mt-4 mb-12 md:mb-16 leading-relaxed">
          {t("coreValueDesc")}
        </p>

        {/* Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 
          md:gap-8
        ">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group bg-white 
                  p-6 sm:p-8 
                  rounded-2xl 
                  border border-gray-200 
                  shadow-sm 
                  hover:shadow-2xl 
                  hover:-translate-y-2 
                  transition-all duration-300
                "
              >
                {/* Icon */}
                <div className="flex justify-center mb-5 sm:mb-6">
                  <div
                    className="
                      w-12 h-12 
                      sm:w-14 sm:h-14 
                      md:w-16 md:h-16
                      rounded-2xl 
                      bg-gradient-to-br 
                      from-[#7a0000]/10 
                      to-yellow-100
                      flex items-center justify-center
                      transition-all duration-300
                      group-hover:scale-110
                      group-hover:from-[#7a0000]
                      group-hover:to-[#4A0404]
                      group-hover:shadow-[0_0_25px_rgba(122,0,0,0.35)]
                    "
                  >
                    <Icon
                      className="
                        w-5 h-5 
                        sm:w-6 sm:h-6 
                        md:w-7 md:h-7
                        text-[#7a0000] 
                        transition-all duration-300
                        group-hover:text-yellow-400
                      "
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#7a0000]">
                  {t(`values.${item.key}.title`)}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {t(`values.${item.key}.desc`)}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default KeyHighlights;