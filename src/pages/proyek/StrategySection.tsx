import { ShieldCheck, Users, TrendingUp, Pickaxe, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

const StrategySection = () => {
  const { t } = useTranslation();

  const strategies = [
    {
      icon: TrendingUp,
      title: t("strategy.s1Title"),
      description: t("strategy.s1Desc"),
    },
    {
      icon: Briefcase,
      title: t("strategy.s2Title"),
      description: t("strategy.s2Desc"),
    },
    {
      icon: Users,
      title: t("strategy.s3Title"),
      description: t("strategy.s3Desc"),
    },
  ];

  const advantages = [
    { icon: Pickaxe, title: t("strategy.a1Title"), description: t("strategy.a1Desc") },
    { icon: ShieldCheck, title: t("strategy.a2Title"), description: t("strategy.a2Desc") },
    { icon: Briefcase, title: t("strategy.a3Title"), description: t("strategy.a3Desc") },
    { icon: TrendingUp, title: t("strategy.a4Title"), description: t("strategy.a4Desc") },
    { icon: Users, title: t("strategy.a5Title"), description: t("strategy.a5Desc") },
    { icon: ShieldCheck, title: t("strategy.a6Title"), description: t("strategy.a6Desc") },
  ];

  return (
    <section
      id="strategy"
      className="py-20 bg-white scroll-mt-24"
    >
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
          {t("strategy.title")}
        </h2>

        <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>

        <p className="mt-6 text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {t("strategy.description")}
        </p>
      </div>

      {/* STRATEGI */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 mb-16">
        {strategies.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-[#F4F6F3] p-8 rounded-lg border border-gray-200 hover:shadow-md transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#C6A75E]/15 text-[#C6A75E] mb-6">
                <Icon size={24} />
              </div>

              <h3 className="text-lg font-semibold text-[#2F3E34] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* KEUNGGULAN */}
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-xl font-semibold text-center text-[#2F3E34] mb-10">
          {t("strategy.advantagesTitle")}
        </h3>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#C6A75E]/15 text-[#C6A75E]">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#2F3E34] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;