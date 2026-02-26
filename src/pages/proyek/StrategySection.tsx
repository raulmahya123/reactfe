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
    {
      icon: Pickaxe,
      title: t("strategy.a1Title"),
      description: t("strategy.a1Desc"),
    },
    {
      icon: ShieldCheck,
      title: t("strategy.a2Title"),
      description: t("strategy.a2Desc"),
    },
    {
      icon: Briefcase,
      title: t("strategy.a3Title"),
      description: t("strategy.a3Desc"),
    },
    {
      icon: TrendingUp,
      title: t("strategy.a4Title"),
      description: t("strategy.a4Desc"),
    },
    {
      icon: Users,
      title: t("strategy.a5Title"),
      description: t("strategy.a5Desc"),
    },
    {
      icon: ShieldCheck,
      title: t("strategy.a6Title"),
      description: t("strategy.a6Desc"),
    },
  ];

  return (
    <section
      id="strategi-keunggulan"
      className="relative py-32 bg-[#f9f9f7] overflow-hidden scroll-mt-32"
    >
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-black to-[#C6A75E] bg-clip-text text-transparent">
            {t("strategy.title")}
          </span>
        </h2>

        <div className="w-24 h-[3px] bg-[#C6A75E] mx-auto mt-8 rounded-full"></div>

        <p className="mt-8 text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
          {t("strategy.description")}
        </p>
      </div>

      {/* STRATEGI */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-24">
        {strategies.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent rounded-t-3xl"></div>

              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#C6A75E]/10 text-[#C6A75E] mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon size={28} />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* KEUNGGULAN */}
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-center mb-12">
          {t("strategy.advantagesTitle")}
        </h3>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#C6A75E]/10 text-[#C6A75E]">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Accent */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#C6A75E]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-black/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default StrategySection;