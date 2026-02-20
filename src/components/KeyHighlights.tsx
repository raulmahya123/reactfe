import { Award, Target, ShieldCheck, Sun, Zap, Flame } from "lucide-react";
import { useTranslation } from "react-i18next";

const KeyHighlights = () => {
  const { t } = useTranslation();

  const values = [
    { key: "excellence", icon: Award },
    { key: "focus", icon: Target },
    { key: "fortitude", icon: ShieldCheck },
    { key: "optimism", icon: Sun },
    { key: "responsive", icon: Zap },
    { key: "tenacity", icon: Flame },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-[#f4f4f4] relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(122,0,0,0.05),_transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <p className="uppercase tracking-[0.3em] text-xs text-[#7a0000] font-semibold">
          {t("coreValue")}
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A0404] mt-3">
          EFFORT
        </h2>

        <p className="text-gray-500 max-w-3xl mx-auto mt-4 mb-16">
          {t("coreValueDesc")}
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm 
                hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#7a0000]/10 
                    flex items-center justify-center
                    group-hover:bg-[#7a0000] transition duration-300">
                    
                    <Icon
                      size={28}
                      className="text-[#7a0000] group-hover:text-yellow-400 transition"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#7a0000]">
                  {t(`values.${item.key}.title`)}
                </h3>

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